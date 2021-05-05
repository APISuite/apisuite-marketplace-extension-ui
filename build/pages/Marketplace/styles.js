import { makeStyles } from '@apisuite/fe-base';
import appCarouselBackground from 'assets/appCarouselBackground.svg';
import spaceBackground from 'assets/space-background.svg';
export default makeStyles((theme) => ({
    amountOfAppMarketAppsText: {
        color: '#4E616F',
        fontSize: '16px',
        fontWeight: 400,
        marginBottom: '25px',
        '& > :first-child': {
            color: theme.palette.text.primary,
            fontWeight: 700,
        },
    },
    appCatalogContainer: {
        alignItems: 'flex-start',
        display: 'flex',
        flexFlow: 'wrap',
        marginBottom: '25px',
    },
    appMarketApps: {
        maxWidth: '975px',
        padding: '60px 45px',
        width: '100%',
    },
    appMarketFilters: {
        borderRight: '1px solid #E3E3E3',
        maxWidth: '250px',
        padding: '60px 0px',
        width: '100%',
    },
    appMarketFiltersAndAppsSection: {
        display: 'flex',
        margin: '0px auto',
        maxWidth: '1200px',
        minHeight: '630px',
        padding: '0px 60px',
        width: '100%',
    },
    appMarketHeader: {
        // First color is a fallback one - do not remove!
        background: theme.palette.primary.main,
        backgroundImage: 'url(' + spaceBackground + ')',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        borderBottom: '4px solid rgba(20, 40, 60, 0.1)',
        height: '335px',
        marginTop: '110px',
        width: '100%',
    },
    appMarketHeaderContentsContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        margin: '0px auto',
        maxWidth: '1200px',
        padding: '70px 60px 0px 60px',
        width: '100%',
    },
    appMarketHeaderImage: {
        maxWidth: '330px',
        transform: 'translate(-25px, -10px)',
        width: '100%',
    },
    appMarketHeaderSearchField: {
        maxWidth: '425px',
        width: '100%',
        // The input field itself
        '& input': {
            color: theme.palette.grey['300'],
            fontSize: '16px',
            fontWeight: 400,
            height: '10px',
        },
        // The input field's SVG icon
        '& svg': {
            color: theme.palette.grey['300'],
        },
    },
    appMarketHeaderTitle: {
        color: theme.palette.common.white,
        fontSize: '42px',
        fontWeight: 700,
        marginBottom: '25px',
    },
    appMarketHeaderTitleAndSearchField: {
        maxWidth: '425px',
        width: '100%',
    },
    featuredAppCard: {
        backgroundColor: theme.palette.common.white,
        borderRadius: theme.palette.dimensions.borderRadius,
        boxShadow: '1px 5px 5px 0px rgba(0, 0, 0, 0.15)',
        cursor: 'pointer',
        display: 'flex',
        height: '60px',
        justifyContent: 'center',
        margin: '0px 10px',
        width: '165px',
    },
    featuredAppCardInfo: {
        textAlign: 'left',
        margin: 'auto 7.5px',
        '& > :first-child': {
            color: theme.palette.text.primary,
            fontSize: '14px',
            fontWeight: 700,
            marginBottom: '-10px',
        },
        '& > :last-child': {
            color: theme.palette.text.hint,
            fontSize: '12px',
            fontWeight: 400,
        },
    },
    featuredAppCardLogo: {
        margin: 'auto 0px',
        fontSize: '35px',
        color: theme.palette.text.primary,
    },
    featuredAppCardsSlider: {
        display: 'flex',
        justifyContent: 'center',
    },
    featuredAppsInnerContainer: {
        margin: 'auto',
        padding: '25px 0px',
        textAlign: 'center',
        width: '100%',
    },
    featuredAppsOuterContainer: {
        background: '#007D7D',
        backgroundImage: 'url(' + appCarouselBackground + ')',
        backgroundSize: 'cover',
        borderRadius: theme.palette.dimensions.borderRadius,
        display: 'flex',
        height: '230px',
        justifyContent: 'space-between',
        marginTop: '50px',
        maxWidth: '720px',
        width: '100%',
    },
    featuredAppsSubtitle: {
        color: theme.palette.common.white,
        fontSize: '16px',
        fontWeight: 300,
        marginBottom: '25px',
    },
    featuredAppsTitle: {
        color: theme.palette.common.white,
        fontSize: '22px',
        fontWeight: 500,
        marginBottom: '10px',
    },
    filterAccordionContainer: {
        backgroundColor: 'transparent',
        boxShadow: 'none',
        '&::before': {
            content: 'none',
        },
    },
    filterAccordionIcon: {
        color: theme.palette.text.hint,
    },
    filterAccordionTitle: {
        color: theme.palette.text.hint,
        fontSize: '16px',
        fontWeight: 400,
    },
    filterSeparator: {
        border: '1px solid #E3E3E3',
        borderRadius: theme.palette.dimensions.borderRadius,
        margin: '25px 0px',
        maxWidth: '175px',
        width: '100%',
    },
    filterTitleContainer: {
        alignItems: 'center',
        display: 'flex',
        marginBottom: '10px',
    },
    filterTitleIcon: {
        color: theme.palette.text.primary,
        marginRight: '7.5px',
    },
    filterTitleText: {
        color: theme.palette.text.primary,
        fontSize: '18px',
        fontWeight: 500,
    },
    invisibleFeaturedAppCardsSliderButton: {
        cursor: 'auto',
        margin: 'auto 0px',
        '& > svg': {
            color: 'transparent',
            fontSize: '35px',
            verticalAlign: 'middle',
        },
    },
    noAppsToDisplay: {
        color: '#4E616F',
        fontSize: '16px',
        fontWeight: 200,
    },
    noFiltersAvailable: {
        color: theme.palette.text.primary,
        fontSize: '12px',
        fontWeight: 400,
    },
    notSelectedFilter: {
        fontSize: '16px',
        fontWeight: 400,
        marginBottom: '-5px',
        '& > :first-child': {
            color: theme.palette.text.primary,
        },
        '& > :last-child': {
            color: theme.palette.text.primary,
        },
    },
    selectedFilter: {
        fontSize: '16px',
        fontWeight: 400,
        marginBottom: '-5px',
        '& > :first-child': {
            color: theme.palette.action.focus,
        },
        '& > :last-child': {
            color: theme.palette.action.focus,
            fontWeight: 500,
        },
    },
    visibleFeaturedAppCardsSliderButton: {
        cursor: 'pointer',
        margin: 'auto 0px',
        '& > svg': {
            color: theme.palette.common.white,
            fontSize: '35px',
            verticalAlign: 'middle',
        },
    },
}));