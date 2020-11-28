import React from "react";
import { useParams } from "react-router-dom";
import ax1 from "../imgs/product-1.jpg";


export default function Product1() {
  let { id } = useParams(id);
 


  return (
    <div>
      <p>
        Very disappointed with this purchase. I submitted a service request to
        replace one of the defective legs three days ago and still haven’t
        gotten any confirmation that it will be replaced. I’ve called every day,
        just to be told that I have to wait for a service technician to review
        my request. Just to get one stupid part relaced. I even considered
        ordering a set of bed legs separated from a different company, the
        problem is that the legs in this kit are not sized to any standard. You
        can find several bed leg kits on Amazon, most of them six inches with a
        5/16” screw. The kit legs are 6-3/4” with a 1/4” screw. I should have
        just returned the kit, completely useless, and the customer support is
        virtually nonexistent. I will update this review if I ever receive the
        replacement part or if I end up returning it. Update 9/17/2018 It took
        10 days total to get the replacement processed and receive a tracking
        number. I received the replacement legs today only to find that they are
        1/2 inch shorter than the ones that came with the kit, and won’t work
        since the metal part of the frame has folding legs that are a fixed
        height to match the taller screw-on legs. I would return it but I don’t
        want to deal with any more BS from this company so I’ll find something
        sturdy for the leg to rest on to fill the 1/2 inch gap. One star review
        stands.
    
      </p>
    </div>
  );
}
