import express from "express";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

/* app.use("/proprietario", proprietariosRouter);
app.use("/animal", animaisRouter);
app.use("/servico", servicosRouter); */

app.listen(3000, () => {
  console.log(`API RUNNING PORT 3000`);
});
