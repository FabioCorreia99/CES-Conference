import { defineStore } from "pinia";

export const usePartnersStore = defineStore("partners", {
  state: () => ({
    partners: [
      {
        id: 0,
        brand: "Atlassian",
        image: "../assets/media/partners/Atlassian.jpg",
        desc: "Suite of productivity tools that helps teams work smarter and faster together, including Jira, Confluence, Bitbucket and Trello.",
        site: "https://www.atlassian.com",
      },
      {
        id: 1,
        brand: "AWS",
        image: "../assets/media/partners/Amazon.jpg",
        desc: "Comprehensive and broadly adopted cloud platform offering fully featured services from data centers globally.",
        site: "https://aws.amazon.com",
      },
      {
        id: 2,
        brand: "Oracle",
        image: "../assets/media/partners/Oracle.jpg",
        desc: "Oracle Cloud Infrastructure offers higher performance, security, and cost savings.",
        site: "https://www.oracle.com",
      },
      {
        id: 3,
        brand: "Slack",
        image: "../assets/media/partners/Slack.jpg",
        desc: "Slack is a group messaging or team collaboration app that aims to simplify communication for businesses.",
        site: "https://slack.com",
      },
      {
        id: 4,
        brand: "Github",
        image: "../assets/media/partners/Github.jpg",
        desc: "GitHub is a cloud-based platform where you can store, share, and work together with others to write code.",
        site: "https://github.com",
      },
      {
        id: 5,
        brand: "Cisco",
        image: "../assets/media/partners/Cisco.jpg",
        desc: "Cisco is a leading technology company that provides networking hardware, software, and services.",
        site: "https://www.cisco.com",
      },
      {
        id: 6,
        brand: "DevITjobs",
        image: "../assets/media/partners/devIT.jpg",
        desc: "Developer security platform that helps organizations find and fix vulnerabilities in their code, open source dependencies, containers, and infrastructure as code.",
        site: "https://devitjobs.com",
      },
      {
        id: 7,
        brand: "Snyk",
        image: "../assets/media/partners/Synk.jpg",
        desc: "Transparent Tech job boards with Software Engineering, DevOps, IT Support and other IT related jobs in the USA & UK.",
        site: "https://snyk.io",
      },
      {
        id: 8,
        brand: "Deloitte",
        image: "../assets/media/partners/Deloitte.jpg",
        desc: "They offer a wide range of services including audit, consulting, financial advisory, risk advisory, tax, and legal services. ",
        site: "https://www.deloitte.com",
      },
      {
        id: 9,
        brand: "Pager Duty",
        image: "../assets/media/partners/PagerDuty.jpg",
        desc: "PagerDuty is a cloud-based incident management platform that helps organizations improve operational visibility and response times.  It automates incident response and reduces alert fatigue.",
        site: "https://info.pagerduty.com/",
      },
    ],
    pendingPartners: [],
  }),
  persist: true,
  getters: {},
  actions: {
    submitPartner(partnerData) {
      let newId = 0;

      if (this.pendingPartners.length > 0) {
        newId = this.pendingPartners[this.pendingPartners.length - 1].id + 1;
      }

      const newPartner = {
        id: newId,
        status: "pending",
        ...partnerData,
        submissionDate: new Date().toISOString(),
      };

      this.pendingPartners.push(newPartner);
      return newPartner;
    },

    approvePartner(id) {
      const index = this.pendingPartners.findIndex((p) => p.id === id);
      if (index !== -1) {
        const approvedPartner = {
          id: this.partners.length, // Garante um novo ID único
          brand: this.pendingPartners[index].companyName,
          desc: this.pendingPartners[index].companyGoals,
          site: this.pendingPartners[index].companyWebsite,
          image: "", // Pode ser um placeholder ou deixar em branco
        };

        this.partners.push(approvedPartner);
        this.pendingPartners.splice(index, 1); // Remover da lista de pendentes
        this.savePartners(); // Persistir mudanças

        return approvedPartner;
      }
      return null;
    },

    savePartners() {
      localStorage.setItem("partners", JSON.stringify(this.partners));
      localStorage.setItem(
        "pendingPartners",
        JSON.stringify(this.pendingPartners)
      );
    },
  },
});
