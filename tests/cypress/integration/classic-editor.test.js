describe('Visit Classic Editor settings page', () => {
	it('Update settings to keep the default editor as Classic editor', () => {
		cy.visitAdminPage('options-writing.php#classic-editor-options');
		cy.get('#classic-editor-classic').click();
		cy.get('#classic-editor-allow').click();
		cy.get('#submit').click();
	});
});

describe('Tests that new post is not tweeted when box is unchecked', () => {
	it('Tests that new post is not tweeted when box is unchecked', () => {
		// Start create post.
		cy.classicStartCreatePost();

		// publish
		cy.get('#publish').click();
		cy.get('#wpadminbar').should('be.visible');

		// Post-publish.
		cy.get('#autoshare_for_twitter_metabox').should('be.visible');
		cy.get('#autoshare_for_twitter_metabox').contains('This post was not tweeted');
	});
});

describe('Tests that new post is tweeted when box is checked', () => {
	it('Tests that new post is tweeted when box is checked', () => {
		// Start create post.
		cy.classicStartCreatePost();	

		// Checkbox
		cy.get('#autoshare-for-twitter-enable').should('exist');
		cy.get('#autoshare-for-twitter-enable').check();
		cy.get('#publish').click();

		// Post-publish.
		cy.get('#autoshare_for_twitter_metabox',).should('be.visible');
		cy.get('#autoshare_for_twitter_metabox',).contains('Tweeted on');
	});
});

describe('Tests that draft post is not tweeted when box is unchecked', () => {
	it('Tests that draft post is not tweeted when box is unchecked', () => {
		// Start create post.
		cy.classicStartCreatePost();
		
		// Save Draft
		cy.get('#save-post').click();

		// Uncheck the checkbox and publish
		cy.get('#autoshare-for-twitter-enable').should('exist');
		cy.get('#autoshare-for-twitter-enable').uncheck();
		cy.get('#publish').click();

		// Post-publish.
		cy.get('#autoshare_for_twitter_metabox').should('be.visible');
		cy.get('#autoshare_for_twitter_metabox').contains('This post was not tweeted');
	});
});


describe('Tests that draft post is not tweeted when box is unchecked', () => {
	it('Tests that draft post is not tweeted when box is unchecked', () => {
		// Start create post.
		cy.classicStartCreatePost();

		// Save Draft
		cy.get('#save-post').click();
		
		// Check the checkbox and publish
		cy.get('#autoshare-for-twitter-enable').should('exist');
		cy.get('#autoshare-for-twitter-enable').check();
		cy.get('#publish').click();

		// Post-publish.
		cy.get('#autoshare_for_twitter_metabox').should('be.visible');
		cy.get('#autoshare_for_twitter_metabox').contains('Tweeted on');
	});
});


