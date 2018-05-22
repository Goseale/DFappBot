/**
 * Represents a command.
 */
class Command {
    /**
     * @param {CustomClient} client The client passed to the command
     * @param {Object} options The properties of the command
     * @param {String} options.name The name of the command
     * @param {String} options.description The description of the command
     * @param {String} options.usage The command usage
     * @param {Array} options.aliases The command aliases
     */
    constructor(client, options) {            
        /**
         * The client passed to the command
         * @type {CustomClient}
         */
        this.client = client;

        /**
         * The command's help properties
         * @type {Object}
         */
        this.help = {
            name: options.name || "unset",
            description: options.description || "No description provided.",
            usage: options.usage || "",
        };
        
        /**
         * The command's config properties
         * @type {Object}
         */
        this.conf = {
            aliases: options.aliases || []
        };
      
    }

    /**
     * Fetches a user from a mention
     * @param {String} user A user mention in the form of a string
     * @returns {Promise<User>} The user mentioned 
     */
    verifyUser(user) {
        return new Promise((resolve) => {
            // Match the user mention
            const match = /(?:<@!?)?(\d{15,21})?/ig.exec(user);
            
            // Fetch the ID from the match
            const id = match ? match[1] : null;
            // Fetch the user from the ID
            resolve(this.client.users.get(id) || (this.client.guild.members.find("displayName", user) || { user: null }).user);
        });
    }

    /**
     * Throws an error
     * @param {String} content The content of the error
     * @returns {Promise<Message>} The message sent 
     */
    error(content) {
        return this.message.channel.send(`❌ **|** ${this.message.author}, ${content}`).then(m => m.delete({ timeout: 15000 }));
    }

    /**
     * Responds to the command
     * @param {String} content The content of a message
     * @returns {Promise<Message>} The message sent
     */
    respond(content, options = { showCheck: true }) {
        return this.message.channel.send(`${options.showCheck ? " ✅ **|**" : ""} ${this.message.author}, ${content}`).then(m => m.delete({ timeout: 15000 }));
    }

    /**
     * Returns an "s" if size is greater than 1, or an empty string if not
     * @param {Number} The size of the item
     * @returns {String} S or simply an empty string
     */
    s(size) {
        return size === 1 ? "" : "s";
    }
  
}

// Export the command class
module.exports = Command;
