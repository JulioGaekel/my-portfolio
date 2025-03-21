const Contact = () => {
    return (
        <section className="min-h-screen flex flex-col items-center justify-center bg-gray-200 p-10">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Contact Me</h2>
            <form
                action="https://formspree.io/f/your_form_id"
                method="POST"
                className="bg-white p-6 rounded-lg shadow-md w-full max-w-lg">
                    <label className="block text-gray-700 font-medium">Your Name</label>
                    <input type="text" name="name" className="w-full border p-2 rounded mt-1 mb-4" required />

                </form>
        </section>
    );
};

export default Contact;
