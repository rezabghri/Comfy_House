import React from "react";
import {useParams} from 'react-router-dom';
import ax2 from "../imgs/product-2.jpg";

export default function Product2() {

  const {id}=useParams();
  return (
    <div>
      <p>
        Firstly, the perfect Paris Leather Bed comes in a range of sizes. These
        different sizes ensure that you are wholly satisfied with your use of
        space. Just whip out that tape measurer and pick and choose what you
        need. These wonderful sizes are 137cm, 152cm, and 183cm. You are in
        total control of your style, your taste, and your atmosphere that you
        want to encourage. This Michael Calvin bed is not just reliable and
        durable but also a great feature with its unique design and original
        leather material. Leave your friends and family standing in awe of your
        beautiful yet practical piece of art. Now that is a statement.
        Furthermore, you can also select from two unique kinds of wood whichever
        one suits you best. The deep brown Chestnut or the dark and mysterious
        Mahogany? Your room, your bed, your choice. Indulge your inner stylist’s
        whims with this perfect, pleasurable, and plush Paris Leather Bed by
        Michael Calvin. Reward yourself with not just rejuvenating sleep but the
        room and bed you always dreamed of too.
      </p>
      <img src={ax2}  style={{width:'250px',height:"190",float:"left"}}/>
    </div>
  );
}
