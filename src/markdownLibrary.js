import React, { Component } from 'react';

const markDownLibrary = {
    headers: {
        code:<code><pre>
            # H1
            ## H2
            ### H3
            #### H4
            ##### H5
            ###### H6

            Alternatively, for H1 and H2, an underline-ish style:

            Alt-H1
            ======

            Alt-H2
            ------
        </pre></code>,
        html: <div>
            <h1>H1</h1>
            <h2>H2</h2>
            <h3>H3</h3>
            <h4>H4</h4>
            <h5>H5</h5>
            <h6>H6</h6>
            <p>Alternatively, for H1 and H2, an underline-ish style:</p>
            <h1>Alt-H1</h1>
            <h2>Alt-H2</h2>

        </div>
    },
    Emphasis: {
        code:<code><pre>
            Emphasis, aka italics, with *asterisks* or _underscores_.

            Strong emphasis, aka bold, with **asterisks** or __underscores__.

            Combined emphasis with **asterisks and _underscores_**.

            Strikethrough uses two tildes. ~~Scratch this.~~
        </pre></code>,
        html: <div>
            <p>Emphasis, aka italics, with <em>asterisks</em> or <em>underscores</em>.</p>
            <p>Strong emphasis, aka bold, with <strong>asterisks</strong> or <strong>underscores</strong>.</p>
            <p>Combined emphasis with <strong>asterisks and <em>underscores</em></strong>.</p>
            <p>Strikethrough uses two tildes. <del>Scratch this.</del></p>
        </div>
    }
}
