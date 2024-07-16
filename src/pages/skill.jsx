import Nav from "@/components/Nav";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
} from "@nextui-org/react";

const skill = () => {
  return (
    <>
      <Nav />
      <div className="sm:h-screen md:h-screen lg:h-screen w-full  bg-purple-50 dark:bg-slate-800">
        <div className=" text-center font-bold text-2xl  m-3 pt-5">
          Experienced with
        </div>
        <div className="box  sm:h-auto  md:h-auto lg:h-auto m-10 border-medium border-black rounded-md">
          <span className="flex   ">
            <Card className=" m-5 w-52">
              <CardBody className="place-items-center place-content-center font-bold text-2xl border-medium border-black">
                Frontend
              </CardBody>
            </Card>
            <div className="w-full  ">
              <Card className="m-5  ">
                <CardBody className="grid grid-cols-1  md:grid-cols-4 sm:grid-cols-2 place-items-center  border-medium border-black gap-2 ">
                  <Card className="max-w-28 p-4  ">
                    <CardHeader className="">
                      <Image
                        alt="html logo"
                        height={40}
                        radius="sm"
                        src="html logo.png"
                        width={40}
                      />
                    </CardHeader>
                    <div className="flex flex-col">
                      <p className="text-md text-center">HTML</p>
                      {/* <p className="text-small text-default-500">nextui.org</p> */}
                    </div>
                  </Card>
                  <Card className="max-w-28 p-4">
                    <CardHeader className="">
                      <Image
                        alt="css logo"
                        height={40}
                        radius="sm"
                        src="css logo.png"
                        width={40}
                      />
                    </CardHeader>
                    <div className="flex flex-col ">
                      <p className="text-md text-center">CSS</p>
                      {/* <p className="text-small text-default-500">nextui.org</p> */}
                    </div>
                  </Card>

                  <Card className="max-w-28 p-4">
                    <CardHeader className="">
                      <Image
                        alt="js logo"
                        height={40}
                        radius="sm"
                        src="js logo.png"
                        width={40}
                      />
                    </CardHeader>
                    <div className="flex flex-col">
                      <p className="text-md text-center">JavaScript</p>
                      {/* <p className="text-small text-default-500">nextui.org</p> */}
                    </div>
                  </Card>
                  <Card className="max-w-28 p-4">
                    <CardHeader className="">
                      <Image
                        alt="node logo"
                        height={40}
                        radius="sm"
                        src="node js logo.svg"
                        width={40}
                      />
                    </CardHeader>
                    <div className="flex flex-col">
                      <p className="text-md text-center">Node</p>
                      {/* <p className="text-small text-default-500">nextui.org</p> */}
                    </div>
                  </Card>
                  <Card className="max-w-28 p-4">
                    <CardHeader className="">
                      <Image
                        alt="nextjs logo"
                        height={40}
                        radius="sm"
                        src="next js logo.jpg"
                        width={40}
                      />
                    </CardHeader>
                    <div className="flex flex-col">
                      <p className="text-md text-center">Next.js</p>
                      {/* <p className="text-small text-default-500">nextui.org</p> */}
                    </div>
                  </Card>
                  <Card className="max-w-28 p-4">
                    <CardHeader className="">
                      <Image
                        alt="bootstrap logo"
                        height={40}
                        radius="sm"
                        src="Bootstrap logo.svg"
                        width={40}
                      />
                    </CardHeader>
                    <div className="flex flex-col">
                      <p className="text-md text-center">Bootstrap</p>
                      {/* <p className="text-small text-default-500">nextui.org</p> */}
                    </div>
                  </Card>
                  <Card className="max-w-28 p-4">
                    <CardHeader className="">
                      <Image
                        alt="tailwind logo"
                        height={40}
                        radius="sm"
                        src="tailwind logo.png"
                        width={40}
                      />
                    </CardHeader>
                    <div className="flex flex-col">
                      <p className="text-md text-center">Tailwind CSS</p>
                      {/* <p className="text-small text-default-500">nextui.org</p> */}
                    </div>
                  </Card>
                  <Card className="max-w-28 p-4">
                    <CardHeader className="">
                      <Image
                        alt="nextui logo"
                        height={40}
                        radius="sm"
                        src="nextui logo.png"
                        width={40}
                      />
                    </CardHeader>
                    <div className="flex flex-col">
                      <p className="text-md text-center">NextUI</p>
                      {/* <p className="text-small text-default-500">nextui.org</p> */}
                    </div>
                  </Card>
                </CardBody>
              </Card>
            </div>
          </span>
        </div>
      </div>
    </>
  );
};

export default skill;
