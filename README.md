# typescript-npm-referable
This is a project skeleton for a reusable library that can be referenced in your **package.json** files in other projects.

The main takeaway should be how the interface, classes etc. that should be available through the package is exported in the **index.ts** file. The **main** and **types** attributes in **package.json** are also required for it to work.

## Referencing it from another project

`> npm install --save bolddp/typescript-npm-referable`

Branches can be referenced by appending `#branch_name` to the library reference.

If you perform additional commits to the project and want to synchronize them to your dependent project, you just run

`> npm update`


## Caveats
Currently there is no automatic mechanism for compiling the Typescript code automatically before committing, so this has to be done manually: `> tsc`




