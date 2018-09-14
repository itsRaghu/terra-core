/* global before, browser, Terra */
const viewports = Terra.viewports('tiny', 'large');

describe('Alert', () => {
  describe('Default', () => {
    before(() => browser.url('/#/raw/tests/terra-alert/alert/default-alert'));
    Terra.should.matchScreenshot({ viewports });
    Terra.should.beAccessible({ viewports });
    Terra.should.themeEachCustomProperty({
      '--terra-alert-icon-font-size': '50px',
    });
  });

  describe('Types', () => {
    before(() => browser.url('/#/raw/tests/terra-alert/alert/alert-type'));
    Terra.should.matchScreenshot({ viewports });
    Terra.should.beAccessible({ viewports });
  });

  describe('Titles', () => {
    before(() => browser.url('/#/raw/tests/terra-alert/alert/alert-title'));
    Terra.should.matchScreenshot({ viewports });
    Terra.should.beAccessible({ viewports });
    Terra.should.themeCombinationOfCustomProperties({
      testName: 'themed',
      properties: {
        '--terra-alert-min-height': '5rem',
        '--terra-alert-alert-background-color': 'purple',
        '--terra-alert-error-background-color': 'purple',
        '--terra-alert-warning-background-color': 'purple',
        '--terra-alert-advisory-background-color': 'purple',
        '--terra-alert-info-background-color': 'purple',
        '--terra-alert-success-background-color': 'purple',

        '--terra-alert-alert-box-shadow': '2px 2px 2px purple',
        '--terra-alert-error-box-shadow': '2px 2px 2px purple',
        '--terra-alert-warning-box-shadow': '2px 2px 2px purple',
        '--terra-alert-advisory-box-shadow': '2px 2px 2px purple',
        '--terra-alert-info-box-shadow': '2px 2px 2px purple',
        '--terra-alert-success-box-shadow': '2px 2px 2px purple',

        '--terra-alert-alert-title-color': 'purple',
        '--terra-alert-error-title-color': 'purple',
      },
    });
  });

  describe('Custom', () => {
    before(() => browser.url('/#/raw/tests/terra-alert/alert/custom-alert'));
    Terra.should.matchScreenshot({ viewports });
    Terra.should.beAccessible({ viewports });
    Terra.should.themeCombinationOfCustomProperties({
      testName: 'themed',
      properties: {
        '--terra-alert-custom-text-color': 'blue',
        '--terra-alert-custom-background-color': 'purple',
        '--terra-alert-custom-box-shadow': '2px 2px 2px purple',
      },
    });
  });

  viewports.forEach((viewport) => {
    describe('Action Button', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-alert/alert/alert-action-button');
        browser.setViewportSize(viewport);
      });

      Terra.should.matchScreenshot();
      Terra.should.beAccessible();

      it('should be register actions', () => {
        expect(browser.getText('#actionButtonClickCount')).to.equal('0');
        browser.click('#actionAlert button');
        expect(browser.getText('#actionButtonClickCount')).to.equal('1');
      });
    });


    describe('Dismissible', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-alert/alert/alert-dismissible');
        browser.setViewportSize(viewport);
      });

      Terra.should.matchScreenshot();
      Terra.should.beAccessible();

      it('should dismiss', () => {
        browser.click('#dismissibleAlert button');
        expect(browser.getText('#dismissed')).to.equal('Alert was dismissed');
      });
    });
  });
});
