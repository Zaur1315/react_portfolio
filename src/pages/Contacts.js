const Contacts = () => {
    return ( 
        <main className="section ">
        <div className="container">
            <h1 className="title-1">Contacts</h1>
            <ul className="content-list">
                <li className="content-list__item">
                    <h2 className="title-2">Location</h2>
                    <p>Azerbaijan, Baku</p>
                </li>
                <li className="content-list__item">
                    <h2 className="title-2">Telegram / WhatsApp</h2>
                    <p><a href="tel:+994703492733">+99470 349 27 33</a></p>
                </li>
                <li className="content-list__item">
                    <h2 className="title-2">Email</h2>
                    <p><a href="mailto:zaur.quseynzade@gmail.com">zaur.quseynzade@gmail.com</a></p>
                </li>
            </ul>
        </div>
    </main>
     );
}
 
export default Contacts;