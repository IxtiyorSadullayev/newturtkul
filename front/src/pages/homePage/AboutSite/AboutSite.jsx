import React from 'react'

function AboutSite() {
    return (
        <div className='opacity-25'>
            <div className="container">
                <div className="asosiy">
                    <h2>Sayt haqida</h2>
                    <p className='text-muted'>Ushbu saytda ko'p hizmatlar mavjud. Siz ulardan birini tanlab bemalol ish olib borishingiz mumkin.</p>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-3">
                        <img src="https://picsum.photos/100" alt="rasm" className="img-fluid" />
                        <h4>Title</h4>
                        <p>text</p>
                        <a href="/" className="nav-link">link</a>
                    </div>
                    <div className="col-sm-12 col-md-3"></div>
                    <div className="col-sm-12 col-md-3"></div>
                    <div className="col-sm-12 col-md-3"></div>
                </div>
            </div>
        </div>
    )
}

export default AboutSite