{
  description = "nodejs project";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixpkgs-unstable";
  };

  outputs = { self, nixpkgs }:
    let
      archs = [ "x86_64-linux" "x86_64-darwin" "aarch64-linux" "aarch64-darwin" ];
      sysPkgs = nixpkgs.lib.genAttrs archs (s: import nixpkgs { system = s; });
      genSystems = fn: nixpkgs.lib.genAttrs archs (s: fn s sysPkgs.${s});
    in
    {
      devShells = genSystems (_: pkgs: {
        default = pkgs.mkShell {
          name = "hello-node";

          buildInputs = with pkgs; [
            nodejs_23
            corepack_latest
          ];
        };
      });

      formatter = genSystems (_: pkgs: pkgs.nixpkgs-fmt);
    };
}
