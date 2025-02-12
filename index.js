import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  const currentTime = new Date().toLocaleTimeString();
  res.render("index.ejs", {time: currentTime }); // 데이터를 템플릿으로 전달
});


app.get("/submit", (req, res) => {
  res.render("submit.ejs");
});

app.post("/context", (req, res) => {

    let data = {
    title : (req.body["user_title"]),
    context : (req.body["user_text"])
  }

  if (!req.body["user_title"] || req.body["user_title"].length === 0) {
    return res.send(
      `<script>
      alert("제목을 입력해주세요.");
      history.back();
      </script>`
    );
  }
  
  if (!req.body["user_text"] || req.body["user_text"].length === 0) {
    return res.send(
      `<script>
      alert("내용을 입력해주세요.");
      history.back();
      </script>`
    );
  }

res.render("context.ejs", data);

});

app.get("/contact", (req, res) => {
  res.render("contact.ejs");
});

app.get("/signin", (req, res) => {
  res.render("signin.ejs");
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });