import React from 'react';
import './Blog.css'
import { PinAngleFillIcon, PinAngleIcon } from '../../utilitis/icons';

const Blog = () => {
    return (
        <div className='blog'>
            <h1>Blog</h1>
            <div className='QA-container'>
                <div className='QA-section'>
                    <div className='icon-container'>
                    <PinAngleIcon size={'36'}></PinAngleIcon>
                    <PinAngleFillIcon size={'36'}></PinAngleFillIcon>
                    </div>
                    <li>
                        What is an access token and refresh token? How do they work and where should we store them on the client-side?
                    </li>
                    <br />
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis, corrupti, commodi nemo aperiam eos animi error accusamus dolor, repudiandae deleniti ea facere! Veritatis natus distinctio architecto atque dolores alias optio, recusandae nulla nesciunt asperiores eum harum consequatur praesentium tempora eius inventore tenetur modi sed provident explicabo. Voluptatum, porro earum? Officiis distinctio eaque voluptatibus consectetur nostrum dolore provident, quos similique porro perspiciatis tempora consequatur magni facere, earum exercitationem odit, soluta omnis quia alias amet in aut voluptates expedita dignissimos. Corporis amet vitae magnam exercitationem non velit id, obcaecati molestiae ullam sit et numquam veritatis illo facilis maiores unde laboriosam cum. Sed quis tempora doloremque dolorem omnis mollitia expedita! Voluptates vero distinctio aut beatae mollitia architecto at suscipit cum rerum sunt, ad dolore exercitationem totam esse,
                    </p>
                </div>

            </div>
        </div>
    );
};

export default Blog;