import React, { useEffect, useState } from "react";
import { differenceInDays, parseISO } from "date-fns";

const Task = ({ taskObj, onComplete }) => {
  const deadlineDate = parseISO(taskObj.deadline);
  const currentDate = new Date("2023-01-20");
  const daysLeft = differenceInDays(deadlineDate, currentDate);

  const accentClass = daysLeft <= 3 ? "normal" : "urgent";

  return (
    <div className="p-6 bg-white rounded-md leading-normal mt-4 shadow-[0_4px_5px_0_rgb(0,0,0,0.1)]">
      <h3 className="text-lg text-orange">{taskObj.title}</h3>
      <div className="text-xs pt-1 ">
        son teslim:
        <span className={`${accentClass} py-1 px-2 inline-block rounded-sm`}>
          {daysLeft} days left
        </span>
      </div>
      <p className="pt-2 pb-3 px-0 text-gray ">{taskObj.description}</p>
      <div>
        {taskObj.people.map((p) => (
          <span
            className="inline-block py-[5px] px-3 text-base border-solid border-2 border-pill rounded-[30px] mr-1 mb-1.5 "
            key={p}
          >
            {p}
          </span>
        ))}
      </div>
      {onComplete && (
        <button
          onClick={() => onComplete(taskObj.id)}
          className="block py-2 px-3 ml-auto bg-[#fecc91] shadow-[0_4px_5px_0_rgb(0,0,0,0.05)]rounded-1 border-0 cursor-pointer "
        >
          Tamamlandı
        </button>
      )}
    </div>
  );
};

export default Task;
