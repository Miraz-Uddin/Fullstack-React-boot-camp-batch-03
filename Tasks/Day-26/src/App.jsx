import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import NoMatch from "./components/NoMatch";
import About from "./pages/About";
import Blog from "./pages/blogs/Blog";
import Blogs from "./pages/blogs/Blogs";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Pricing from "./pages/Pricing";
import Services from "./pages/Services";
import Team from "./pages/Team";
import Testimonials from "./pages/Testimonials";

function App() {
  // Funky Promotional
  console.log(
    "%cWhat are you doing here?! you sneaky developer...",
    "color: #b432ff"
  );
  console.log(
    "%cDM me 👉 https://www.facebook.com/miraz.uddin.7773631",
    "color: #b432ff"
  );
  console.log("%c— Miraz Vai", "color: #777777");

  const [count, setCount] = useState(0);

  const articles = [
    {
      id: 1,
      thumbnail: "/assets/img/blog-1.jpg",
      title:
        "Dolorum optio tempore voluptas dignissimos cumque fuga qui quibusdam quia reiciendis",
      author: "John Doe",
      publicationDate: "Jan 1, 2020",
      commentsCount: 12,
      content:
        "Similique neque nam consequuntur ad non maxime aliquam quas. Quibusdam animi praesentium. Aliquam et laboriosam eius aut nostrum quidem aliquid dicta. Et eveniet enim. Qui velit est ea dolorem doloremque deleniti aperiam unde soluta. Est cum et quod quos aut ut et sit sunt. Voluptate porro consequatur assumenda perferendis dolore.",
    },
    {
      id: 2,
      thumbnail: "/assets/img/blog-2.jpg",
      title: "Nisi magni odit consequatur autem nulla dolorem",
      author: "John Doe",
      publicationDate: "Jan 1, 2020",
      commentsCount: 12,
      content:
        "Incidunt voluptate sit temporibus aperiam. Quia vitae aut sint ullam quis illum voluptatum et. Quo libero rerum voluptatem pariatur nam. Ad impedit qui officiis est in non aliquid veniam laborum. Id ipsum qui aut. Sit aliquam et quia molestias laboriosam. Tempora nam odit omnis eum corrupti qui aliquid excepturi molestiae. Facilis et sint quos sed voluptas. Maxime sed tempore enim omnis non alias odio quos distinctio.",
    },
    {
      id: 3,
      thumbnail: "/assets/img/blog-3.jpg",
      title:
        "Possimus soluta ut id suscipit ea ut. In quo quia et soluta libero sit sint.",
      author: "John Doe",
      publicationDate: "Jan 1, 2020",
      commentsCount: 12,
      content:
        "Aut iste neque ut illum qui perspiciatis similique recusandae non. Fugit autem dolorem labore omnis et. Eum temporibus fugiat voluptate enim tenetur sunt omnis. Doloremque est saepe laborum aut. Ipsa cupiditate ex harum at recusandae nesciunt. Ut dolores velit.",
    },
    {
      id: 4,
      thumbnail: "/assets/img/blog-4.jpg",
      title:
        "Non rem rerum nam cum quo minus. Dolor distinctio deleniti explicabo eius exercitationem. Veniam eius velit ab ipsa quidem rem.",
      author: "John Doe",
      publicationDate: "Jan 1, 2020",
      commentsCount: 12,
      content:
        "Aspernatur rerum perferendis et sint. Voluptates cupiditate voluptas atque quae. Rem veritatis rerum enim et autem. Saepe atque cum eligendi eaque iste omnis a qui. Quia sed sunt. Ea asperiores expedita et et delectus voluptates rerum. Id saepe ut itaque quod qui voluptas nobis porro rerum. Quam quia nesciunt qui aut est non omnis. Inventore occaecati et quaerat magni itaque nam voluptas. Voluptatem ducimus sint id earum ut nesciunt sed corrupti nemo.",
    },
  ];

  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="team" element={<Team />} />
          <Route path="testimonials" element={<Testimonials />} />
          <Route path="services" element={<Services />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="blogs" element={<Blogs articles={articles} />} />
          <Route path="blogs/:id" element={<Blog articles={articles} />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
