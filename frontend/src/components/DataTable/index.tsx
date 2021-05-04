const DataTable = () => {
    return (
        <div className="table-responsive">
            <table className="table table-striped table-sn">
                <thead>
                    <tr>
                        <th>Data</th>
                        <th>Vendedor</th>
                        <th>Cliente Visitados</th>
                        <th>Négocios Fechados</th>
                        <th>Valor</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>22/04/2021</td>
                        <td>Barry Allen</td>
                        <td>Logan</td>
                        <td>Bruce</td>
                        <td>1555.00</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default DataTable;