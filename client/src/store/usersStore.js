import { makeAutoObservable } from 'mobx';
import usersData from '../utils/allusers.json';

class UserStore {
    users = [];
    allPeoples = [];
    friends = [];
    currentUser = null;
    selectedUser = null;
    messagesByFriend = {};

    constructor() {
        makeAutoObservable(this);
        this.fetchUsers();
    }
    // Registration
    addUser(email, password, userInfo) {
        const { born, workplace, education, maritalStatus, address } = userInfo;
        this.users.push({
            id: this.users.length + 1,
            email,
            password,
            born,
            workplace,
            education,
            maritalStatus,
            address,
        });
        this.setCurrentUser({ email });
    }

    // Login
    isUserExists(email) {
        this.setCurrentUser({ email });
        return this.users.some((user) => user.email === email);
    }

    infoAboutCurrentUser() {
        const user = this.users.find(
            (user) => user.email === this.currentUser.email
        );
        return user;
    }

    // Open individual user-prifile
    setSelectedUser(user) {
        this.selectedUser = user;
    }

    getSelectedUser() {
        return this.selectedUser;
    }
    getCurrentUser() {
        return this.currentUser;
    }

    fetchUsers() {
        try {
            // console.log(usersData);
            this.allPeoples = usersData;
        } catch (error) {
            console.error('Error reading users data:', error);
        }
    }

    addFriend(user) {
        // console.log(user);
        const isFriendExist = this.friends.some(
            (friend) => friend.id === user.id
        );
        if (!isFriendExist) {
            this.friends.push(user);
        }
    }
    getMyFriends() {
        return this.friends;
    }
    filterUsers(criteria) {
        return this.allPeoples.filter((user) => {
            return (
                user.name.toLowerCase().includes(criteria.toLowerCase()) ||
                user.email.toLowerCase().includes(criteria.toLowerCase())
            );
        });
    }

    setCurrentUser(user) {
        this.currentUser = user;
    }

    clearCurrentUser() {
        this.currentUser = null;
    }

    deleteFriend(id) {
        this.friends = this.friends.filter((user) => user.id !== id);
    }

    addMessage(friendId, message) {
        // console.log(friendId, message);
        const messages = this.messagesByFriend[friendId] || [];

        const newMessage = {
            id: Date.now(),
            text: message,
            timestamp: new Date().toISOString(),
            sender: this.currentUser.email,
        };
        console.log(newMessage);
        this.messagesByFriend = {
            ...this.messagesByFriend,
            [friendId]: [...messages, newMessage],
        };
        // console.log(this.messagesByFriend);
    }
    getMessages(friendId) {
        return this.messagesByFriend[friendId];
    }
}

const usersStore = new UserStore();

export default usersStore;
