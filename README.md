## Setup
1. Install typescript globally
```
npm install -g typescript
```
2. Reference globally installed typescript.
```
 npm link typescript
```
3. Create a typescript project. This will initialize the tsconfig.json file.
```
tsc --init
```

## Developer workflow using VSCode
1. Open project folder from visual studio code
2. Run 'build' task. This will copy static files into the dist folder and compile using tsc.
3. Alternatively, copy index.html, resources and scripts into the dist folder, and run tsc directly
```
 tsc -w
```

## Running the game on a local server:
Start a server in the dist folder using http-server from Node:
```
 cd dist/
 http-server
```

## References
1. https://updatestage.com/create-a-phaser-3-project-part-1/
2. https://phaser.io/tutorials/getting-started-phaser3