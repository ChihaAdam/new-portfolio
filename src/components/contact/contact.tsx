import contactList from "../../data/social.json";
import Card from "./card";

function Contact() {
  return (
    <footer id="contact">
      <h2 className="text-4xl font-bold text-gradiant">Contact</h2>
      <div className="flex flex-wrap gap-4 justify-center items-center">
        {contactList.map((contact) => (
          <Card key={contact.text} {...contact} />
        ))}
      </div>
    </footer>
  );
}

export default Contact;
