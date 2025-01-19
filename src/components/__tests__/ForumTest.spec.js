import { setActivePinia, createPinia } from "pinia"; 
import { useTopicsStore } from "@/stores/forum";
import { describe, it, expect, beforeEach } from "vitest";

describe("Pinia State Management", () => {
    beforeEach(() => {
        setActivePinia(createPinia());
    })

    it("Should initialize the store", () => {
        const store = useTopicsStore();
        expect(store.topics).toEqual([]);
    })

    it("Should initialize with topics from localStorage", () => {
        const mockTopics = [
            { id: 0, title: "Test Topic", desc: "Description", filters: ["Tag1"], likes: [], comments: [] }
        ];
        localStorage.setItem("topics", JSON.stringify(mockTopics));

        const store = useTopicsStore();
        // Check if the topics array is populated with the topics saved in local storage
        expect(store.topics).toEqual(mockTopics);
    });

    it("Should create a topic", () => {
        const store = useTopicsStore();
        store.addTopic(0, "title", "content", ["AI", "Future", "Tech"]);
        // Check if the topic was created
        expect(store.topics.length).toBe(2);
        // Check if ID is correct
        expect(store.topics[1].title).toBe("title");
        expect(store.topics[1].id).toBe(1);
    })

    it("Should remove a topic by ID", () => {
        const store = useTopicsStore();
        store.topics = [
            { id: 0, title: "Topic 1", desc: "Desc", filters: [], likes: [], comments: [] },
            { id: 1, title: "Topic 2", desc: "Desc", filters: [], likes: [], comments: [] },
        ];
    
        store.removeTopic(0);
        // Check if topics array only has 1 topic
        expect(store.topics).toHaveLength(1);
        // Check if the right topic was removed
        expect(store.topics[0].id).toBe(1);
    });
    
    it("Should add a like from a user", () => {
        const store = useTopicsStore();
        store.topics = [{ id: 0, likes: [] }];
    
        // Adds a like to the topic with id: 0 and user id: 1
        store.toggleLike(0, 1);
        // Checks if the topic was updated with the like
        expect(store.topics[0].likes).toContain(1);
    });
    
    it("Should remove a like if the user already liked the topic", () => {
        const store = useTopicsStore();
        store.topics = [{ id: 0, likes: [1] }];
    
        // Removes the like if the user already liked the topic
        store.toggleLike(0, 1);
        // Check if the user (with id: 1) liked the topic (with id: 0)
        expect(store.topics[0].likes).not.toContain(1);
    });

    it("Should save topics to localStorage", () => {
        const store = useTopicsStore();
        store.topics = [{ id: 0, title: "Test Topic" }];
        
        // Saves the topic array on local storage
        store.saveTopics();
        // Check local storage
        const savedTopics = JSON.parse(localStorage.getItem("topics"));
        expect(savedTopics).toEqual(store.topics);
    });
    
    
})

