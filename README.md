# Property Search Test Task

## Requirements

Complete the tasks in the following order, and only address optional tasks once the earlier tasks have been completed.

1. Display a property list
   - All the data is ready and mocked for you - use function `fetchProperties` from [src/api/properties.ts](src/api/properties.ts)
   - All stylistic details are up to you. Don't spend too much time on it.
   - Implement the following layout using vanilla CSS (Flex / Grid are preferable)
     - mobile: 0-599px
         - make one column layout
     - tablet: 600-959px
         - two columns
     - desktop: 960px
         - three columns
   - When the page is opened - perform an initial search without any filters (we'll implement them on the next step)
2. Implement filters:
    - Min/max price
      - min: 0, max: 3000
    - City selection (dropdown)
      - Options: 
        - All (Default)
        - Atlanta 
        - New York
    - All subsequent searches can be performed only by clicking on "Find" button
3. Implement pagination
    - Page size - 9
4. **Optional**: Implement like button

## Environment, Runtime and libraries
- We use Vite with TypeScript and CSS Modules support
- Pre installed packages:
  - [Lodash](https://lodash.com/docs/4.17.15)
  - [clsx](https://github.com/lukeed/clsx)
  - [react-slider](https://github.com/zillow/react-slider)
  - [react-paginate](https://github.com/AdeleD/react-paginate)

Feel free to install other libraries if you need them
