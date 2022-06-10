export default async function userHandler(req: any, res: any) {
  try {
    const response = await fetch(
      "http://localhost:3000/api/revalidate?secret=MFJst47dfsLKp7lcI"
    );
    const data = await response.json();
    console.log("data", data)
    if (data) {
      res.send(200);
    }
  } catch {
    res.send(400);
  }
}
