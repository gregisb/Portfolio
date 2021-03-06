import styled from 'styled-components';

export const Img = styled.img`
  width:100%;
  height:100%;
  object-fit: cover;
  overflow: hidden;
  border-radius: 10px 10px 0 0;
  box-shadow: 1px 1px 10px rgba(80, 78, 78, 0.2)
`

export const GridContainer = styled.section`
display: grid;
grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
padding: 3rem;
place-items: center;
column-gap: 2rem;
row-gap: 3rem;
@media ${(props) => props.theme.breakpoints.sm} {
  display: flex;
  flex-direction: column;
  padding: 2rem;
  padding-bottom: 0;
}

`
export const BlogCard = styled.div`
  border-radius: 10px;
  box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
  text-align: center;
  width: 400px;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
  }
`;
export const TitleContent = styled.div`
  text-align: center;
  z-index: 20;
  width: 100%;
  margin-top: 1rem;

`;


export const HeaderThree = styled.h3`
  font-weight: 500;
  letter-spacing: 2px;
  color: #9cc9e3;
  padding: .5rem 0;
  font-size: ${(props) => props.title ? '3rem' : '2rem'};
`;

export const Hr = styled.hr`
  width: 50px;
  height: 3px;
  margin: 20px auto;
  border: 0;
  background: #d0bb57;
`;

export const Intro = styled.div`
  width: 170px;
  margin: 0 auto;
  color: #dce3e7;
  font-family: 'Droid Serif', serif;
  font-size: 13px;
  font-style: italic;
  line-height: 18px;
`;


export const CardInfo = styled.p`
  width: 100%;
  
  color: #e4e6e7;
  font-style: 2rem;
  line-height: 24px;
  text-align: justify;

`;


export const UtilityList = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: space-around;
  margin: 2.5rem 0;
`;

export const ExternalLinks = styled.a`
color:#d4c0c0;
font-size: 1.6rem;
padding:1rem 1.5rem;
background: #6b3030;
border-radius: 15px;
transition: 0.5s;
&:hover{
  background: #801414;

}
`;

export const CardContainer = styled.div `
padding: 3rem;

`

export const TagList = styled.ul`
display: flex;
gap: 10px;
flex-wrap: wrap;
justify-content: space-around;
padding: 2rem;
@media ${(props) => props.theme.breakpoints.sm} {
  padding:.3rem

}
`
export const Tag = styled.li`
background: linear-gradient(121.57deg, #13ADC7 18.77%, #945DD6 60.15%);
padding: 6px;
border-radius: 10px;
// color: #d8bfbf;
color: #fff;
font-size: 1.5rem;
padding: 1rem;
@media ${(props) => props.theme.breakpoints.sm} {
  padding:.6rem

}
`