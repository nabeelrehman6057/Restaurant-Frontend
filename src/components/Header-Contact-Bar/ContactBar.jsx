import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const ContactBar = () => {
  return (
    <>
      <div className="hidden lg:flex justify-between p-3 bg-[#474747]  items-center w-full h-[44px]">
        <div className="flex items-center gap-8 pl-[60px] py-[11px]">
          <div className="phoneNumber flex gap-2 ">
            <img
              src="/Header-Contact-Bar/phone.png"
              alt="contact"
              className="text-white  w-5 h-6"
            />
            <a
              href="tel:+92 300 3025823"
              className="text-white overflow-hidden hover:text-gray-200"
            >
              +92 300 3025823
            </a>
          </div>

          <div className="Email flex gap-2">
            <EmailIcon className="text-white " />
            <a
              href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=GTvVlcSHxTkVhJKdTWRSHxlJCXVzdhcPHfFgmbkvjdTVggxnHPnpVJlBmctHrqrfJvZkwCRJrjnnC"
              className="text-white flex items-center overflow-hidden hover:text-gray-200 "
            >
              nabeelrehman907@gmail.com
            </a>
          </div>
        </div>
        <div className="flex gap-4 pr-[70px] overflow-hidden">
          <a href="https://www.facebook.com/nabeelrehman907">
            <FacebookIcon className="bg-gray-600 rounded-full p-0.5 text-white  hover:bg-slate-300 hover:text-black hover:duration-300 duration-300" />
          </a>
          <a href="https://www.instagram.com/nabeel_rehman1/">
            <InstagramIcon className="bg-gray-600 rounded-full p-0.5 text-white  hover:bg-slate-300 hover:text-black hover:duration-300 duration-300" />
          </a>
          <a href="https://www.linkedin.com/in/nabeel-rehman-89b50220a/">
            <LinkedInIcon className="bg-gray-600 rounded-full p-0.5 text-white  hover:bg-slate-300 hover:text-black hover:duration-300 duration-300" />
          </a>
          <a href="https://github.com/">
            <GitHubIcon className="bg-gray-600 rounded-full p-0.5 text-white  hover:bg-slate-300 hover:text-black hover:duration-300 duration-300" />
          </a>
        </div>
      </div>
    </>
  );
};

export default ContactBar;
