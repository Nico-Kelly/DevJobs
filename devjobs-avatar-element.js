class DevJobsAvatar extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
    }


    createUrl(service, username) {
        return `https://unavatar.io/${service}/${username}`
    }
    render() {

        const service = this.getAttribute('service') ?? 'github';
        const username = this.getAttribute('username') ?? 'Nico-Kelly'

        const url = this.createUrl(service, username)
        this.shadowRoot.innerHTML = `
        <style>
        
        img {
            width: 3rem;
            border-radius: 50%;
            border: solid 2px #Fff
        }

        </style>
        <img src="${url}" alt="Avatar del usuario" class="avatar"
        />
        `    }

        connectedCallback(){
            this.render()
        }
}


customElements.define('devjobs-avatar', DevJobsAvatar);