const getTable = (
  tableData: string[][],
  withTableHeader = true
): HTMLTableElement => {
  const $table = document.createElement('table');
  const $thead = document.createElement('thead');
  const $tbody = document.createElement('tbody');

  tableData.forEach((row, index) => {
    if (withTableHeader && index === 0) {
      // #region thead
      const $trInThead = document.createElement('tr');

      row.forEach((cell) => {
        const $th = document.createElement('th');
        $th.textContent = cell;

        $trInThead.append($th);
      });

      $thead.append($trInThead);

      $table.append($thead);
      // #endregion
    } else {
      // #region tbody
      const $trInBody = document.createElement('tr');

      row.forEach((cell) => {
        const $td = document.createElement('td');

        $td.textContent = cell;

        $trInBody.append($td);
      });

      $tbody.append($trInBody);

      $table.append($tbody);
      // #endregion
    }
  });

  $table.append($thead, $tbody);

  return $table;
};

export default getTable;
