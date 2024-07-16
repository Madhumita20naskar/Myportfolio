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
const project = () => {
  return (
    <>
      <Nav />

      <div className="sm:h-screen md:h-screen lg:h-screen bg-sky-100 dark:bg-slate-800">
        <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 space-x-3 gap-4 place-items-center pt-12 ">
          <Card>
            <CardBody className="overflow-visible p-0">
              <Image
                shadow="sm"
                radius="lg"
                width="100%"
                className="w-[390px] object-fill h-[340px]"
                src="form_input.png"
              />
            </CardBody>
            <CardFooter className=" justify-center text-center cursor-pointer text-xl flex flex-col">
              <p>A form validation project</p>
              <a href="https://form-validation-pied-tau.vercel.app/">
                <button className="bg-blue-400 hover:bg-blue-600 rounded-lg p-2 mt-3">
                  click to view
                </button>
              </a>
            </CardFooter>
          </Card>
          <Card>
            <CardBody className="overflow-visible p-0">
              <Image
                shadow="sm"
                radius="lg"
                width="100%"
                className="w-[390px] object-fill h-[340px]"
                src="shopping.png"
              />
            </CardBody>
            <CardFooter className=" justify-center text-center cursor-pointer text-xl flex flex-col">
              <p>A responsive website project</p>
              <a href="https://responsive-website-drab.vercel.app/">
                <button className="bg-blue-400 hover:bg-blue-600 rounded-lg p-2 mt-3">
                  click to view
                </button>
              </a>
            </CardFooter>
          </Card>
          <Card>
            <CardBody className="overflow-visible p-0 ">
              <Image
                shadow="sm"
                radius="lg"
                width="100%"
                className="w-[390px] object-fill h-[340px]"
                src="dark.jpeg"
              />
            </CardBody>
            <CardFooter className=" justify-center text-center cursor-pointer text-xl flex flex-col">
              <p>A template with active darkmode project</p>

              <a href="https://darkmode-olive.vercel.app/">
                <button className="bg-blue-400 hover:bg-blue-600 rounded-lg p-2 mt-3">
                  click to view
                </button>
              </a>
            </CardFooter>
          </Card>
        </div>
      </div>
    </>
  );
};

export default project;
