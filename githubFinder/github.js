class Github {
    constructor() {
        this.client_id = 'adb368f1f9ff210cb43e';
        this.client_secret = '88d8a58952ff70a2804338d3af1b8225366cad59';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();

        const repos = await repoResponse.json();


        return {
            profile,
            repos
        }

    }
}