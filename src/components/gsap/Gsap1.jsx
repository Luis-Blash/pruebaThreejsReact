import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export const Gsap1 = () => {
  // referencia
  const boxRef = useRef(null);

  useEffect(() => {
    gsap.to(boxRef.current, { rotation: "+=360" });
  });

  const box1Ref = useRef();
  const q = gsap.utils.selector(box1Ref);

  useEffect(() => {
    // Target any descendant with the class of .box - no matter how far down the descendant tree. Uses el.current.querySelectorAll() internally
    gsap.to(q(".box"), {
      x: 100,
      stagger: 0.33,
      repeat: -1,
      repeatDelay: 1,
      yoyo: true,
    });
  }, [q]);

  const [reversed, setReversed] = useState(false);
  const toggle = useRef();
  const q1 = gsap.utils.selector(toggle);

  // store the timeline in a ref.
  const tl = useRef();

  useEffect(() => {
    // add a box and circle animation to our timeline and play on first render
    tl.current = gsap
      .timeline()
      .to(q1(".box1"), {
        rotate: 360,
      })
      .to(q1(".circle1"), {
        x: 100,
      });
  }, [q1]);

  useEffect(() => {
    // toggle the direction of our timeline
    tl.current.reversed(reversed);
  }, [reversed]);

  return (
    <div className="box flex justify-center items-center flex-col gap-3">
      <h2>Normal</h2>
      <div className="bg-green-600 h-10 w-20" ref={boxRef}>
        Leccion 1
      </div>
      <h2>Anidados por class</h2>
      <div
        className="flex justify-center items-center gap-3 flex-col"
        ref={box1Ref}
      >
        <div className="bg-green-600 h-12 w-20 box">Box</div>
        <div className="bg-green-600 h-12 w-20 box">Box</div>
      </div>
      <h2>Buton toggle</h2>
      <div
        className="flex justify-center items-center gap-3 flex-col"
        ref={toggle}
      >
        <div className="bg-red-100 p-2">
          <button onClick={() => setReversed(!reversed)}>Toggle</button>
        </div>
        <div className="box1 bg-green-600 h-10 w-20">Box</div>
        <div className="circle1 bg-green-600 h-12 w-20 rounded-full">circle</div>
      </div>
    </div>
  );
};
