export default function RedText({str}) {

    const firstHalf = str.substring(0,3);
    const secondHalf = str.substring(3,str.length);

    return (
        <span>
            <span style={{color : '#E60023'}}>{firstHalf}</span>{secondHalf}
        </span>
    );
}