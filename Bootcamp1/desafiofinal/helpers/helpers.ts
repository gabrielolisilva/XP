import * as _ from "lodash";

export default function dataOrganization(data: any) {
  const matchesArray = [];

  for (let days of data) {
    for (let match of days.partidas) {
      matchesArray.push(match);
    }
  }

  const individualTeamsMatches = _.groupBy(matchesArray, "mandante");

  const teamsCounters = _.orderBy(
    Object.keys(individualTeamsMatches).map((teamsName) => {
      return {
        img: `/${teamsName}.png`,
        time: teamsName,
        pontos:
          individualTeamsMatches[teamsName][
            individualTeamsMatches[teamsName].length - 1
          ].pontuacao_geral_mandante.total_pontos,
        vitórias:
          individualTeamsMatches[teamsName][
            individualTeamsMatches[teamsName].length - 1
          ].pontuacao_geral_mandante.total_vitorias,
        todosJogos: individualTeamsMatches[teamsName],
        empates:
          individualTeamsMatches[teamsName][
            individualTeamsMatches[teamsName].length - 1
          ].pontuacao_geral_mandante.total_empates,
        derrotas:
          individualTeamsMatches[teamsName][
            individualTeamsMatches[teamsName].length - 1
          ].pontuacao_geral_mandante.total_derrotas,
        gols_Pros:
          individualTeamsMatches[teamsName][
            individualTeamsMatches[teamsName].length - 1
          ].pontuacao_geral_mandante.total_gols_marcados,
        gols_Contra:
          individualTeamsMatches[teamsName][
            individualTeamsMatches[teamsName].length - 1
          ].pontuacao_geral_mandante.total_gols_sofridos,
        saldo_Gols:
          individualTeamsMatches[teamsName][
            individualTeamsMatches[teamsName].length - 1
          ].pontuacao_geral_mandante.total_gols_marcados -
          individualTeamsMatches[teamsName][
            individualTeamsMatches[teamsName].length - 1
          ].pontuacao_geral_mandante.total_gols_sofridos,
      };
    }),
    ["time"],
    ["asc"]
  );

  const finalData = _.orderBy(teamsCounters, ["pontos"], ["desc"]);
  console.log(finalData);
  return finalData;
}
