const {sequelize} = require("../src/db");
const { Video, CommSection, Comment, Playlist, Channel } = require("../src/index")


describe("Youtube Database", () => {
    
    beforeAll(async () => {
		await sequelize.sync({force: true})
	})

    test('can create a channel', async() => {
		const testChannel = await Channel.create({name : 'The JS Wizard'})
		expect(testChannel.name).toBe('The JS Wizard')
	})
    
    test('can create a playlist', async() => {
		const testPlaylist = await Playlist.create({name : 'Coding Tutorials'})
		expect(testPlaylist.name).toBe('Coding Tutorials')
	})

    test('can create a video', async() => {
		const testVideo = await Video.create({name : 'Intro to JS'})
		expect(testVideo.name).toBe('Intro to JS')
	})

    test('can create a comment section', async() => {
		const testCommSection = await CommSection.create({status : 'enabled'})
		expect(testCommSection.status).toBe('enabled')
	})

    test('can create a comment', async() => {
		const testComment = await Comment.create({body : "Can't wait to learn JavaScript!"})
		expect(testComment.body).toBe("Can't wait to learn JavaScript!")
	})

    test("videos have a comment section", async () => {
        const testVideo = await Video.create({name : 'Intro to JS'})
        const testCommSection = await CommSection.create({status : 'enabled'})
        await testVideo.setCommSection(testCommSection)
        const commSection = await testVideo.getCommSection()
        expect(commSection instanceof CommSection).toBeTruthy()
    })

    test("comment sections have comments", async () => {
        const testCommSection = await CommSection.create({status : 'enabled'})
        const testComment = await Comment.create({body : "Can't wait to learn JavaScript!"})
        const testComment2 = await Comment.create({body : "Just here to brush up on JS"})
        await testCommSection.addComment(testComment)
        await testCommSection.addComment(testComment2)
        const comments = await testCommSection.getComments()
        expect(comments.length).toBe(2)
        expect(comments[0] instanceof Comment).toBeTruthy()
    })

    test("playlist has videos", async () => {
        const testPlaylist = await Playlist.create({name : 'Coding Tutorials'})
        const testVideo = await Video.create({name : 'Intro to JS'})
        const testVideo2 = await Video.create({name : 'Classes, Objects, and Inheritance'})
        await testPlaylist.addVideo(testVideo)
        await testPlaylist.addVideo(testVideo2)
        const videos = await testPlaylist.getVideos()
        expect(videos.length).toBe(2)
        expect(videos[0] instanceof Video).toBeTruthy()
    })

})