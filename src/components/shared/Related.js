import { SeparateByCommas } from "./SeparateByCommas";

export const Related = ({ title, related = {} }) => {

  return (
    <div>
      <h5>Related { title }</h5>
      <hr />

      <table className="table table-sm">
      <tbody>
        {
           Object.entries( related ).map(([ name, items ], i) => (
            <tr key={ i } >
              <th>{ name }</th>
              <td>
                <SeparateByCommas list={ items } />
              </td>
            </tr>
           ))
        }
      </tbody>
      </table>
    </div>
  );

};
