import { defineStore } from "pinia";

export const usePartnersStore = defineStore("partners", {
    state: () => ({
        partners: [
            {
                id: 0,
                brand:"Atlassian",
                image:"../assets/media/partners/Atlassian.jpg", 
                desc: "Suite of productivity tools that helps teams work smarter and faster together, including Jira, Confluence, Bitbucket and Trello.",
                site: "https://www.atlassian.com"
            },
            {
                id: 1,
                brand:"AWS",
                image:"../assets/media/partners/Amazon.jpg",
                desc: "Comprehensive and broadly adopted cloud platform offering fully featured services from data centers globally.",
                site: "https://aws.amazon.com"
            },
            {
                id: 2,
                brand:"Oracle",
                image:"../assets/media/partners/Oracle.jpg",
                desc: "Oracle Cloud Infrastructure offers higher performance, security, and cost savings.",
                site: "https://www.oracle.com"
            },
            {
                id: 3,
                brand:"Slack",
                image:"../assets/media/partners/Slack.jpg",
                desc: "Slack is a group messaging or team collaboration app that aims to simplify communication for businesses.",
                site: "https://slack.com"
            },
            {
                id: 4,
                brand:"Github",
                image:"../assets/media/partners/Github.jpg",
                desc: "GitHub is a cloud-based platform where you can store, share, and work together with others to write code.",
                site: "https://github.com"
            },
            {
                id: 5,
                brand:"Cisco",
                image:"../assets/media/partners/Cisco.jpg" ,
                desc: "Cisco is a leading technology company that provides networking hardware, software, and services.",
                site: "https://www.cisco.com"
            },
            {
                id: 6,
                brand:"DevITjobs",
                image:"../assets/media/partners/devIT.jpg" ,
                desc: "Developer security platform that helps organizations find and fix vulnerabilities in their code, open source dependencies, containers, and infrastructure as code.",
                site: "https://devitjobs.com"
            },
            {
                id: 7,
                brand:"Snyk",
                image:"../assets/media/partners/Synk.jpg" ,
                desc: "Transparent Tech job boards with Software Engineering, DevOps, IT Support and other IT related jobs in the USA & UK.",
                site: "https://snyk.io"
            },
            {
                id: 8,
                brand:"Deloitte",
                image:"../assets/media/partners/Deloitte.jpg", 
                desc: "They offer a wide range of services including audit, consulting, financial advisory, risk advisory, tax, and legal services. ",
                site: "https://www.deloitte.com"
            },
            {
                id: 9,
                brand:"Pager Duty",
                image:"../assets/media/partners/PagerDuty.jpg", 
                desc: "PagerDuty is a cloud-based incident management platform that helps organizations improve operational visibility and response times.  It automates incident response and reduces alert fatigue.",
                site: "https://info.pagerduty.com/"
            },
            
        ],
        pendingPartners: [],
    }),
    persist: true,
    getters: {

    },
    actions: {
        submitPartner(partnerData) {
            const newPartner = {
                id: this.partners.length,
                status: "pending",
                ...partnerData,
                submissionDate: new Date().toISOString(),
            }

            this.pendingPartners.push(newPartner);

            return newPartner;
        },
        aprovePartner(partnerID) {
            const index = this.pendingPartners.findIndex(p => p.id === partnerID);

            // Verify if partner is found
            if (index !== -1) {
                const aprovedPartner = {
                    ...this.pendingPartners[index],
                    status: 'aproved',
                }

                // remove from the pending partners array
                this.pendingPartners.splice(index, 1);
                // add to partners list
                return aprovedPartner;
            }

        },
    },
})
