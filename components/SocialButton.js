import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

export default function SocialButton(props) {
  const children = props.children;
  return (
    <a
      href={props.href || "#"}
      target={props.href ? "_blank" : "_parent"}
      type="button"
      className="transition-all bg-theme hover:opacity-80 text-white rounded-lg py-2 px-4 mx-2 font-inter"
    >
      <p className="flex items-center">
        <SocialMediaIcon type={props.type} /> {children}
      </p>
    </a>
  );
}

function SocialMediaIcon(props) {
  if (props.type == "github") {
    return <AiFillGithub className="mr-2 text-xl" />;
  } else if (props.type == "linkedin") {
    return <AiFillLinkedin className="mr-2 text-xl" />;
  }
}
