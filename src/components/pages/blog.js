import React, { Component } from "react";
import Gallery from "react-photo-gallery";
import Image from "../../../static/images/IMG_8111-Edit.jpg";
import Image2 from "../../../static/images/D44A7172-2.jpg";

export default class Blog extends Component {
  constructor() {
    super();
  }

  photos = [
    {
      className: "image",
      src: "https://source.unsplash.com/2ShvY8Lf6l0/800x599",
      width: 4,
      height: 3
    },
    {
      className: "image",
      src: Image,
      width: 1,
      height: 1
    },
    {
      className: "image",
      src: Image2,
      width: 3,
      height: 4
    },
    {
      className: "image",
      src: "https://source.unsplash.com/iecJiKe_RNg/600x799",
      width: 3,
      height: 4
    },
    {
      className: "image",
      src: "https://source.unsplash.com/epcsn8Ed8kY/600x799",
      width: 3,
      height: 4
    },
    {
      className: "image",
      src: "https://source.unsplash.com/NQSWvyVRIJk/800x599",
      width: 4,
      height: 3
    },
    {
      className: "image",
      src: "https://source.unsplash.com/zh7GEuORbUw/600x799",
      width: 3,
      height: 4
    },
    {
      className: "image",
      src: "https://source.unsplash.com/PpOHJezOalU/800x599",
      width: 4,
      height: 3
    },
    {
      className: "image",
      src: "https://source.unsplash.com/I1ASdgphUH4/800x599",
      width: 4,
      height: 3
    },
    {
      className: "image",
      src: "https://source.unsplash.com/XiDA78wAZVw/600x799",
      width: 3,
      height: 4
    },
    {
      className: "image",
      src: "https://source.unsplash.com/x8xJpClTvR0/800x599",
      width: 4,
      height: 3
    },
    {
      className: "image",
      src: "https://source.unsplash.com/qGQNmBE7mYw/800x599",
      width: 4,
      height: 3
    },
    {
      className: "image",
      src: "https://source.unsplash.com/NuO6iTBkHxE/800x599",
      width: 4,
      height: 3
    },
    {
      className: "image",
      src: "https://source.unsplash.com/pF1ug8ysTtY/600x400",
      width: 4,
      height: 3
    },
    {
      className: "image",
      src: "https://source.unsplash.com/A-fubu9QJxE/800x533",
      width: 4,
      height: 3
    },
    {
      className: "image",
      src: "https://source.unsplash.com/5P91SF0zNsI/740x494",
      width: 4,
      height: 3
    }
  ];

  render() {
    return (
      <div className="page-content blog-container">
        <div className="session-title-blog-wrapper">
          <h1>Session Title</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem commodi accusantium veniam dicta officiis, vel eius?
            Natus nisi reprehenderit rerum quasi soluta aperiam, voluptate
            ipsam, ratione consequuntur iusto similique sit? Ipsum suscipit
            nihil amet eveniet, sit deleniti velit, quis molestias magni, ea
            provident maxime commodi! Vel laboriosam quis alias modi fugit ut
            ipsum debitis quibusdam in doloremque. Perferendis, reprehenderit
            expedita. Eaque, natus omnis consectetur, non distinctio laborum
            odio delectus sequi quis saepe nesciunt, provident animi placeat
            esse sunt minima aliquam libero? Praesentium atque animi numquam
            nostrum fuga alias accusantium repellendus. Aut numquam veniam,
            neque architecto saepe a vero, cumque et error doloribus dolorum
            voluptatum deserunt esse impedit dolore quo. Repellat maiores
            molestiae odio dolore quo, officiis quas dolor veritatis. Iusto?
            Reprehenderit fugit temporibus deserunt itaque magni, fuga at,
            eveniet numquam officiis ratione delectus laudantium. Dolores minus
            laboriosam quos consequuntur deserunt at quaerat, animi esse, eaque
            velit neque delectus totam dolorum? Unde sapiente eum amet saepe
            aliquid commodi quo optio totam! Voluptate impedit ut molestiae
            saepe iure, sapiente aliquam mollitia fugit repellendus ullam
            asperiores, officiis explicabo doloribus itaque sunt! Dicta, illum!
            Doloremque corporis eaque eos unde exercitationem voluptas
            voluptatem distinctio accusamus dicta optio corrupti eius delectus
            perferendis reiciendis modi nostrum ipsum, culpa maiores quasi.
            Officia qui laudantium ratione libero? Nihil, incidunt! Dolorem,
            commodi ipsam soluta illo autem animi pariatur fuga quae fugit
            provident ipsum ratione exercitationem labore nulla sunt unde eius,
            doloribus possimus? Obcaecati accusamus, dolorem eius eligendi culpa
            placeat voluptatibus? Necessitatibus aperiam voluptas eum, illum
            delectus, eveniet atque dignissimos itaque obcaecati nihil quidem
            doloribus illo cum omnis fugit, nisi molestias labore laboriosam!
            Officia laudantium labore magni expedita, sit quisquam architecto!
            Voluptatum perferendis esse deleniti, repellat voluptatibus quidem
            deserunt quod harum cum eaque recusandae eveniet ipsum aperiam ab
            numquam iure eligendi iusto id nulla sunt delectus quo. Ex nemo
            dolores atque!
          </p>
        </div>
        <Gallery photos={this.photos} direction={"column"} />
      </div>
    );
  }
}
