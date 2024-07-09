
const SortSelector = () => {
  return (
    <div className="w-72 px-2">
      <label
        for="countries_disabled"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Sort by
      </label>
      <select
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option
          value="RECOMMENDED"
          aria-selected="false"
          data-opt-id="RECOMMENDED"
        >
          Recommendedgit pull
        </option>
        <option
          value="PRICE_LOW_TO_HIGH"
          aria-selected="false"
          data-opt-id="PRICE_LOW_TO_HIGH"
        >
          Price: low to high
        </option>
        <option
          value="PRICE_HIGH_TO_LOW"
          aria-selected="false"
          data-opt-id="PRICE_HIGH_TO_LOW"
        >
          Price: high to low
        </option>
        <option
          value="REVIEW_RELEVANT"
          aria-selected="true"
          data-opt-id="REVIEW_RELEVANT"
        >
          Guest rating + our picks
        </option>
        <option
          value="PROPERTY_CLASS"
          aria-selected="false"
          data-opt-id="PROPERTY_CLASS"
        >
          Star rating
        </option>
      </select>
    </div>
  );
};

export default SortSelector;
