import React from 'react';
import { Link } from 'react-router';

export default function Home() {
    return (
        <div>
            <p>
                HELLO
            </p>
            <p>
                welcome.
            </p>
            <p>
                front end developer, artist, queer, multiracial. I put some things I make here; feel
                free to poke around.
            </p>
            <p>
                all sentences and phrases here begin with lowercase letters unless it begins with a proper
                noun. "I" and "I'm" are also exceptions.
            </p>
            <p>
                I apologize for the hash appended in the url. a caveat for using github pages.
            </p>
            <p>
                current background: <Link to="/play/orthofloat">orthofloat</Link>
            </p>
        </div>
    );
}
