import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import data from "@/data/contact-me.json";
export function ContactBadge() {
  return (
    <>
      <div className="grid sm:grid-flow-row mx-[100px] md:grid-cols-3 ">
        {data.map((each) => (
          <div
            className="mx-auto py-2 space-x-0 flex flex-col justify-center items-center "
            key={each.id}
          >
            <a href={each["account-link"]} target="blank">
              <Avatar>
                <AvatarImage src={each["icon-image"]} alt={each.username} />
                <AvatarFallback>{each.username}</AvatarFallback>
              </Avatar>
            </a>
            <div className="py-1 text-md font-medium">
              <span className="dark:text-slate-100 ">{each.username}</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

// import data from "@/data/contact-me.json";
// export function ContactBadge() {
//   return (
//     <>
//       <div className="flex items-center justify-center  gap-3">
//         {data.map((each) => (
//           <div className="" key={each.id}>
//             {/* <div> */}
//               <img
//                 src={each["icon-image"]}
//                 alt={each.platform}
//                 width={100}
//                 height={100}
//                 className=""
//               />
//             {/* </div> */}
//             {/* <div className=""> */}
//               <span className="dark:text-slate-100 ">{each.username}</span>
//             {/* </div> */}
//           </div>
//         ))}
//       </div>
//     </>
//   );
// }
