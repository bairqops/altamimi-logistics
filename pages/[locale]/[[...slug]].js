import Website from '../../components/Website';
const pages=['','about','services','industries','insights','contact','services/customs-clearance','services/freight-coordination'];
export default function Page(props){return <Website {...props}/>}
export function getStaticPaths(){return {paths:['en','ar'].flatMap(locale=>pages.map(page=>({params:{locale,slug:page?page.split('/'):[]}}))),fallback:false}}
export function getStaticProps({params}){return {props:{locale:params.locale,page:(params.slug||[]).join('/')}}}
