import Image from "next/image"


export function ImagesAng() {

  const images = [
    {
      imageEvent: "/Etherfuse.jpeg",
      title: "Etherfuse hackathon",
      description: "Second place of Etherfuse hackathon."
    },
    {
      imageEvent: "/showETH.jpeg",
      title: "Presenting 4health",
      description: "Etherfuse hackathon."
    },
    {
      imageEvent: "/reun.jpeg",
      title: "Presenting Taglify app",
      description: "In the UTCH."
    },
    {
      imageEvent: "/tecMTY.jpeg",
      title: "Presenting 4health",
      description: "Etherfuse hackathon."
    },
    {
      imageEvent: "/friends.jpeg",
      title: "Presenting 4health",
      description: "Etherfuse hackathon."
    }
  ]

  return (
    <section className="h-auto py-12 text-neutral-200">
      <div className="container grid gap-6 md:gap-8 mx-auto max-w-6xl">
        <div className="grid auto-rows-[192px] grid-cols-3 gap-4">
          {images.map((image, i) => (
            <div
              key={i}
              className={`row-span-1 rounded-xl  border-slate-400/10 bg-neutral-100 overflow-hidden dark:bg-neutral-900 ${i === 3 || i === 6 ? "col-span-2" : ""
                }`}
            >
              <img className="object-cover h-full w-full" src={image.imageEvent} alt={image.title} />
            </div>
          ))}
        </div>
        {/* <div className="grid lg:grid-cols-3 gap-10 justify-center">
          <div className="flex gap-6 flex-col justify-center text-start items-center glassy2">
            <img
              alt="Basketball"
              className="rounded-lg object-cover hover:opacity-50 transition-opacity"
              src="/Etherfuse.jpeg"
              width="350"
            />
            <div className="grid gap-1 w-full">
              <h3 className="font-semibold">Etherfuse hackathon</h3>
              <p className="text-sm leading-none">Second place.</p>
            </div>
          </div>
          <div className="flex gap-6 flex-col justify-center text-start items-center">
            <img
              alt="Running"
              className="rounded-lg object-cover  hover:opacity-50 transition-opacity"
              src="/Angel.jpg"
              width="350"
            />
            <div className="grid gap-1 w-full">
              <h3 className="font-semibold">Running</h3>
              <p className="text-sm leading-none">Everything you need for every mile.</p>
            </div>
          </div>
          <div className="flex gap-6 flex-col justify-center text-start items-center">
            <img
              alt="Football"
              className="rounded-lg object-cover  hover:opacity-50 transition-opacity"
              src="/Angel.jpg"
              width="350"
            />
            <div className="grid gap-1 w-full">
              <h3 className="font-semibold">Football</h3>
              <p className="text-sm leading-none">Command the field in game-ready gear.</p>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  )
}
