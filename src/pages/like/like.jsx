import React from "react";
import { useSelector } from "react-redux";
import Card from "../../componenets/card";
import { Link } from "react-router-dom";

function Like() {
  const { like } = useSelector((state) => state.likeSlice);
  return (
    <div className="px-[10px] md:px-[30px] xl:px-[50px]">
      <div className="flex gap-1">
        <h1 className="font-bold mb-3">Like page / </h1>
        <Link to={"/"}><p>Home</p></Link>
      </div>
      <div className="grid grid-cols-5 gap-3">
        {like.map((value) => (
          <Card key={value.id} {...value} />
        ))}
      </div>
    </div>
  );
}

export default Like;
