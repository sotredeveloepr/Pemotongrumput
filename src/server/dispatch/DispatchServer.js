import Express from "express";

export default class DispatchServer
{
  start()
  {
    console.log("kode dispatch");
    const httpServer = new Express();
    console.log("express sudah selesai");
    httpServer.get("/", (_req, res) => res.send("Selamat datang di Pemotongrumput"));
    httpServer.use((_req, res, _next) =>
    {
      res.status(404).send("<!doctype html><html lang=\"en\"><body><img src=\"https://http.cat/404\" /></body></html>");
    });
    httpServer.listen(99);
    console.log("mendengarkan");
  }
}