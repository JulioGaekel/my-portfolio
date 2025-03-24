const Contact = () => {
    return (
        <section className="min-h-screen w-full flex flex-col items-center justify-center bg-gray-200 p-6">
            <div>
                <h2 className="text-4xl font-bold text-gray-800 mb-6">Contact Me</h2>
            </div>
            <form
                action="https://formspree.io/f/your_form_id"
                method="POST"
                className="bg-white p-6 rounded-lg shadow-md w-full max-w-lg">
                    <label className="block text-gray-600 font-medium ">Your name</label>
                    <input type="text" name="name" className="w-full border p-2 rounded mt-1 mb-4 bg-white text-black" required />

                    <label className="block text-gray-600 font-medium">Your email address</label>
                    <input type="email" name="email" className="w-full border p-2 rounded mt-1 mb-4 bg-white text-black" required />

                    <label className="block text-gray-600 font-medium">Message</label>
                    <textarea name="message" rows="5" className="w-full border p-2 rounded mt-1 mb-4 bg-white text-black" required></textarea>

                    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">Send message</button>
            </form>
        </section>
    );
};

export default Contact;
