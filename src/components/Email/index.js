import React, { Component } from "react";
import { render } from "react-dom";

import MailchimpSubscribe from "react-mailchimp-subscribe";

// a basic form
const CustomForm = ({ status, message, onValidated }) => {
    let email, name;
    const submit = () =>
        email &&
        name &&
        email.value.indexOf("@") > -1 &&
        onValidated({
            EMAIL: email.value,
            NAME: name.value
        });

    return (
        <div
            style={{
                borderRadius: 2,
                padding: 10,
                display: "inline-block"
            }}
        >
            {status === "sending" && <div style={{ color: "blue" }}>sending...</div>}
            {status === "error" && <div style={{ color: "red" }}>{message}</div>}
            {status === "success" && <div style={{ color: "green" }}>{message}</div>}
            <input
                style={{ fontSize: "1em", padding: 5 }}
                ref={node => (name = node)}
                type="text"
                placeholder="Your name"
            />
            <br />
            <input
                style={{ fontSize: "1em", padding: 5 }}
                ref={node => (email = node)}
                type="email"
                placeholder="Your email"
            />
            <br />
            <button style={{ fontSize: "1em", padding: 5 }} onClick={submit}>
                Submit
            </button>
        </div>
    );
};

class Email extends Component {
    render() {
        const url =
            "https://patrickteachingart.us11.list-manage.com/subscribe/post?u=00bb906f4310de403db0d029c&amp;id=a3f38ddde1";
        return (
            <div>
                <MailchimpSubscribe
                    url={url}
                    render={({ subscribe, status, message }) => (
                        <CustomForm
                            status={status}
                            message={message}
                            onValidated={formData => subscribe(formData)}
                        />
                    )}
                />
            </div>
        );
    }
}

export default Email