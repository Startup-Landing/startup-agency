/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container, Image, Text } from 'theme-ui';
import Tabs, { TabPane } from 'rc-tabs';
import { rgba } from 'polished';
import quote from 'assets/images/icons/quote.png';
import uber from 'assets/images/logos/uber.png';
import google from 'assets/images/logos/google.png';
import paypal from 'assets/images/logos/paypal.png';
import microsoft from 'assets/images/logos/microsoft.png';
import dribbble from 'assets/images/logos/dribbble.png';

const data = [
  {
    id: 1,
    logo: uber,
    author: 'By Denny Albuz, Adviser of Paypal',
    quote: `“Whatever we create in Qwilr looks absolutely brilliant. It helps show our work in the best light, and is downright impressive when clients see a Qwilr Page we have made for them.”`,
  },
  {
    id: 2,
    logo: google,
    author: 'By Denny Albuz, Adviser of Paypal',
    quote: `“Qwilr Page we have made for them. Whatever we create in Qwilr looks absolutely brilliant. It helps show our work in the best light, and is downright impressive when clients see a”`,
  },
  {
    id: 3,
    logo: paypal,
    author: 'By Denny Albuz, Adviser of Paypal',
    quote: `“Whatever we create in Qwilr looks absolutely brilliant. It helps show our work in the best light, and is downright impressive when clients see a Qwilr Page we have made for them.”`,
  },
  {
    id: 4,
    logo: microsoft,
    author: 'By Denny Albuz, Adviser of Paypal',
    quote: `“Qwilr Page we have made for them. Whatever we create in Qwilr looks absolutely brilliant. It helps show our work in the best light, and is downright impressive when clients see a”`,
  },
  {
    id: 5,
    logo: dribbble,
    author: 'By Denny Albuz, Adviser of Paypal',
    quote: `“Whatever we create in Qwilr looks absolutely brilliant. It helps show our work in the best light, and is downright impressive when clients see a Qwilr Page we have made for them.”`,
  },
];

const Testimonials = () => {
  return (
    <Box as="section" id="testimonials" sx={styles.section}>
      <Container>
        <Tabs
          sx={styles.tabs}
          animated={{ tabPane: true }}
          tabPosition="bottom"
        >
          {data?.map((item) => (
            <TabPane key={item.id} tab={<Image src={item.logo} alt="logo" />}>
              <Box as="blockquote">
                {item.quote}
                <Text as="span" sx={styles.author}>
                  {item.author}
                </Text>
              </Box>
            </TabPane>
          ))}
        </Tabs>
      </Container>
    </Box>
  );
};

export default Testimonials;

const styles = {
  section: {
    backgroundColor: rgba('#FFF5ED', 0.5),
    pt: [7, null, null, 9, null, 10, 11],
    pb: [9, null, null, 10, 11],
  },
  tabs: {
    border: 0,
    flexDirection: ['column-reverse', null, null, null, null, 'column'],
    '.rc-tabs-nav': {
      mt: [8, null, null, 9, 11],
    },
    '.rc-tabs-nav-wrap': {
      borderTop: `1px solid ${rgba('#01070D', 0.1)}`,
      justifyContent: 'center',
    },
    '.rc-tabs-tab': {
      backgroundColor: 'transparent',
      // m: ['0 45px'],
    },
    '.rc-tabs-tab-btn': {
      display: 'flex',
      alignItems: 'center',
      lineHeight: 1,
      outline: 0,
      img: {
        outline: 0,
        maxWidth: [50, 65, null, 110, '80%', '100%'],
        m: ['0 auto'],
      },
    },
    '.rc-tabs-nav-list': {
      flexGrow: 1,
      justifyContent: 'space-evenly',
      pt: [4, null, null, 7, 9],
    },
    '.rc-tabs-tabpane': {
      outline: 0,
      blockquote: {
        fontFamily: 'heading',
        fontWeight: 400,
        fontSize: [2, null, null, 3, 4, 6],
        lineHeight: [1.87, null, null, 2.08],
        position: 'relative',
        maxWidth: 846,
        margin: '0px auto',
        pt: ['12px', null, null, '17px', '13px'],
        pl: [35, 35, 35, 10, 11],
        ':before': {
          background: `url(${quote}) no-repeat`,
          content: `''`,
          position: 'absolute',
          width: 128,
          height: 43,
          left: ['-31px', null, null, '-16px', '-7px', 0],
          top: ['1px', '1px', '1px', 0],
          backgroundSize: ['75%', null, null, '100%'],
        },
      },
      span: {
        color: '#7E8896',
        fontFamily: 'body',
        display: 'flex',
        fontWeight: 500,
        fontSize: [0, 1, 1, 2],
        lineHeight: 2.5,
        mt: [1, null, null, 3],
      },
    },
    '.rc-tabs-ink-bar': {
      top: 0,
      height: 2,
      backgroundColor: '#A17857',
      borderRadius: 5,
    },
  },
};
