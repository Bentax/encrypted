import { Component } from 'react';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            key: '',
            plaintext: '',
            ciphertext: ''
        };
    }

    encryptString = () => {
        const { plaintext, key } = this.state;
        const encryptedString = this.xorEncrypt(plaintext, key);
        this.setState({ ciphertext: encryptedString });
    };

    decryptString = () => {
        const { ciphertext, key } = this.state;
        const decryptedString = this.xorDecrypt(ciphertext, key);
        this.setState({ plaintext: decryptedString });
    };

    xorEncrypt = (text, key) => {
        let encrypted = '';
        for (let i = 0; i < text.length; i++) {
            encrypted += String.fromCharCode(text.charCodeAt(i) ^ key.charCodeAt(i % key.length));
        }
        return btoa(encrypted);
    };

    xorDecrypt = (text, key) => {
        const decodedText = atob(text);
        let decrypted = '';
        for (let i = 0; i < decodedText.length; i++) {
            decrypted += String.fromCharCode(decodedText.charCodeAt(i) ^ key.charCodeAt(i % key.length));
        }
        return decrypted;
    };

    handleKeyChange = (e) => {
        this.setState({ key: e.target.value });
    };

    handlePlaintextChange = (e) => {
        this.setState({ plaintext: e.target.value });
    };

    handleCiphertextChange = (e) => {
        this.setState({ ciphertext: e.target.value });
    };

    render() {
        const { key, plaintext, ciphertext } = this.state;

        return (
            <div>
                <h2>Encrypt and Decrypt Strings</h2>
                <div>
                    <label>Key:</label>
                    <input type="text" value={key} onChange={this.handleKeyChange} />
                </div>
                <div>
                    <label>Plaintext:</label>
                    <input type="text" value={plaintext} onChange={this.handlePlaintextChange} />
                    <button onClick={this.encryptString}>Encrypt</button>
                </div>
                <div>
                    <label>Ciphertext:</label>
                    <input type="text" value={ciphertext} onChange={this.handleCiphertextChange} />
                    <button onClick={this.decryptString}>Decrypt</button>
                </div>
            </div>
        );
    }
}

export default App;
