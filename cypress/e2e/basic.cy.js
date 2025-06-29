describe('基本的なページナビゲーション', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('トップページが正常に読み込まれる', () => {
    cy.get('header').should('be.visible');
    cy.get('nav').should('be.visible');
  });

  it('メインメニューが表示される', () => {
    cy.get('nav').within(() => {
      cy.contains('ホーム').should('be.visible');
      cy.contains('メニュー').should('be.visible');
      cy.contains('スタッフ').should('be.visible');
      cy.contains('お問い合わせ').should('be.visible');
    });
  });
}); 