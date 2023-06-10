import Footer from "../../components/footer/Footer";
import Form from "../../components/form/Form"
import ContactHeader from "../../components/header/ContactHeader"



const Contact = () => {
  return (
    <div>
      <ContactHeader />
      <h1 className="text-4xl md:text-5xl flex justify-center items-center mx-auto font-bold text-dark mt-20">Leave us your info</h1>
      <Form />
      <Footer/>
    </div>
  );
}

export default Contact